/**
 * Created by Bahgat on 3/30/16.
 */
/* Copyright 2013 Chris Wilson

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

export class AudioCommands
{
      audioContext:AudioContext;
      audioInput = null;
    realAudioInput = null;
    inputPoint = null;
   // audioRecorder = null;
      rafID = null;
      analyserContext = null;
      canvasWidth;
    canvasHeight;
      recIndex = 0;

    node;
    config;
    worker;

    currCallback;
    recording = false;

    canvas:any;
    analyserNode:any;
    cfg;
    blob=null;
    constructor()
    {
       if( (window as any).AudioContext)
       {
           this.audioContext = new AudioContext();
       }
       else
       {
           this.audioContext = new (window as any).webkitAudioContext()
       }


         
        // window.addEventListener('load', function () {
             this.initAudio();
        // });


    }

    /* TODO:

     - offer mono option
     - "Monitor input" switch
     */

      saveAudio() {
        this.exportWAV(this.doneEncoding,null);
        // could get mono instead by saying
        // audioRecorder.exportMonoWAV( doneEncoding );
    }



      doneEncoding(blob) {
this.blob=blob;
        this.setupDownload(blob, "myRecording" + ((this.recIndex < 10) ? "0" : "") + this.recIndex + ".wav");
          this.recIndex++;
    }

      toggleRecording(e) {
          var that = this;
        if (e.classList.contains("recording")) {
            // stop recording
            this.stop();
            e.classList.remove("recording");
            this.getBuffers(function (buffers) {

                  //  that.canvas = document.getElementById("wavedisplay");

               // that.drawBuffer(that.canvas.width, that.canvas.height, that.canvas.getContext('2d'), buffers[0]);

                    // the ONLY time gotBuffers is called is right after a new recording is completed -
                    // so here's where we should set up the download.
                that.exportWAV(that.doneEncoding,null);

            });
        } else {
            // start recording

            e.classList.add("recording");
            this.clear();
            this.record();
        }
    }

      convertToMono(input) {
        var splitter = this.audioContext.createChannelSplitter(2);
        var merger = this.audioContext.createChannelMerger(2);

        input.connect(splitter);
        splitter.connect(merger, 0, 0);
        splitter.connect(merger, 0, 1);
        return merger;
    }

      cancelAnalyserUpdates() {
        window.cancelAnimationFrame(this.rafID);
        this.rafID = null;
    }

      updateAnalysers( ) {
          var that=this;
        if (!this.analyserContext) {
             this.canvas = document.getElementById("analyser");
            this.canvasWidth = this.canvas.width;
            this.canvasHeight = this.canvas.height;
            this.canvas.boxShadow=  '0px 0px 10px red'
           // box-shadow: 0px 0px 10px green;
            this.analyserContext = this.canvas.getContext('2d');

        }

        // analyzer draw code here
        {
            var SPACING = 3;
            var BAR_WIDTH = 1;
            var numBars = Math.round(this.canvasWidth / SPACING);
            var freqByteData = new Uint8Array(this.analyserNode.frequencyBinCount);

             this.analyserNode.getByteFrequencyData(freqByteData);

            this.analyserContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.analyserContext.fillStyle = '#F6D565';
            this.analyserContext.lineCap = 'round';
            var multiplier = this.analyserNode.frequencyBinCount / numBars;

            // Draw rectangle for each frequency bin.
            for (var i = 0; i < numBars; ++i) {
                var magnitude = 0;
                var offset = Math.floor(i * multiplier);
                // gotta sum/average the block, or we miss narrow-bandwidth spikes
                for (var j = 0; j < multiplier; j++)
                    magnitude += freqByteData[offset + j];
                magnitude = magnitude / multiplier;
                var magnitude2 = freqByteData[i * multiplier];
                this.analyserContext.fillStyle = "hsl( " + Math.round((i * 360) / numBars) + ", 100%, 50%)";
                this.analyserContext.fillRect(i * SPACING, this.canvasHeight, BAR_WIDTH, -magnitude);
            }
        }

    this.rafID = window.requestAnimationFrame(function(){
        that.updateAnalysers();
    });
    }

      toggleMono() {
        if (this.audioInput != this.realAudioInput) {
            this.audioInput.disconnect();
            this.realAudioInput.disconnect();
            this.audioInput = this.realAudioInput;
        } else {
            this.realAudioInput.disconnect();
            this.audioInput = this.convertToMono(this.realAudioInput);
        }

          this.audioInput.connect(this.inputPoint);
    }

      gotStream(stream) {
        //  setTimeout(() => {

        //  }, 1000);


    }

      initAudio() {

         var that =this;
        if (!navigator.getUserMedia)
            navigator.getUserMedia = (navigator as any).webkitGetUserMedia || (navigator as any).mozGetUserMedia;
        if (!(navigator as any).cancelAnimationFrame)
            (navigator as any).cancelAnimationFrame = (navigator as any).webkitCancelAnimationFrame || (navigator as any).mozCancelAnimationFrame;
        if (!(navigator as any).requestAnimationFrame)
            (navigator as any).requestAnimationFrame = (navigator as any).webkitRequestAnimationFrame || (navigator as any).mozRequestAnimationFrame;

        navigator.getUserMedia(
            {
                "audio": {
                    "mandatory": {
                        "googEchoCancellation": "false",
                        "googAutoGainControl": "false",
                        "googNoiseSuppression": "false",
                        "googHighpassFilter": "false"
                    },
                    "optional": []
                },
            }, function(stream)
            {
                that.inputPoint = that.audioContext.createGain();

                // Create an AudioNode from the stream.
                that.realAudioInput = that.audioContext.createMediaStreamSource(stream);
                that.audioInput = that.realAudioInput;
                that.audioInput.connect(that.inputPoint);

//    audioInput = convertToMono( input );

                that.analyserNode = that.audioContext.createAnalyser();
                that.analyserNode.fftSize = 2048;
                that.inputPoint.connect(that.analyserNode);


                that.config = that.cfg || {};
                var bufferLen = that.config.bufferLen || 4096;

                if (!that.inputPoint.context.createScriptProcessor) {
                    that.node = that.inputPoint.context.createJavaScriptNode(bufferLen, 2, 2);
                } else {
                    that.node = that.inputPoint.context.createScriptProcessor(bufferLen, 2, 2);
                }
               // that.worker = new Worker('lib/audio/recorderjs/recorderWorker.js');
                that.worker = new Worker('assets/lib/audio_delete_it/recorderjs/recorderWorker.js');
                that.worker.onmessage = that.onmessage.bind(that);

                that.worker.postMessage({
                    command: 'init',
                    config: {
                        sampleRate: that.inputPoint.context.sampleRate
                    }
                });




                that.node.onaudioprocess = function (e) {
                    if (!that.recording) return;
                    that.worker.postMessage({
                        command: 'record',
                        buffer: [
                            e.inputBuffer.getChannelData(0),
                            e.inputBuffer.getChannelData(1)
                        ]
                    });
                }
                that.inputPoint.connect(that.node);
                that.node.connect(that.inputPoint.context.destination);   // if the script node is not connected to an output the "onaudioprocess" event is not triggered in chrome.




                var  zeroGain = that.audioContext.createGain();
                zeroGain.gain.value = 0.0;
                that.inputPoint.connect(zeroGain);
                zeroGain.connect(that.audioContext.destination);
                that.updateAnalysers();
            }

            , function (e) {
                alert('Error getting audio');
                console.log(e);
            });
    }


      drawBuffer( width, height, context, data ) {
    var step = Math.ceil( data.length / width );
    var amp = height / 2;
    context.fillStyle = "silver";
    context.clearRect(0,0,width,height);
    for(var i=0; i < width; i++){
        var min = 1.0;
        var max = -1.0;
        for (var j=0; j<step; j++) {
            var datum = data[(i*step)+j];
            if (datum < min)
                min = datum;
            if (datum > max)
                max = datum;
        }
        context.fillRect(i,(1+min)*amp,1,Math.max(1,(max-min)*amp));
    }
}

    onmessage(ev: MessageEvent){
        var blob = ev.data;
        this.currCallback(blob);
        // alert("jjj")
    }

    configure() {
        for (var prop in this.cfg) {
            if (this.cfg.hasOwnProperty(prop)) {
                this.config[prop] = this.cfg[prop];
            }
        }
    }

    record() {
        this.recording = true;
    }

    stop() {
        this.recording = false;
    }

    clear() {
        this.worker.postMessage({command: 'clear'});
    }

    getBuffers(cb) {
        this.currCallback = cb || this.config.callback;
        this.worker.postMessage({command: 'getBuffers'})
    }

    exportWAV_right(cb:any, type:any) {
        this.currCallback = cb || this.config.callback;
        type = type || this.config.type || 'audio/wav';
        if (! this.currCallback) throw new Error('Callback not set');
        this.worker.postMessage({
            command: 'exportWAV',
            type: type
        });
    }
    exportWAV(cb,type:any) {
       this.currCallback = cb || this.config.callback;
        type = type || this.config.type || 'audio/wav';
        if (! this.currCallback) throw new Error('Callback not set');


        this.worker.postMessage({
            command: 'exportWAV',
            type: type
        });
    }


    exportMonoWAV(cb, type) {
        this. currCallback = cb || this.config.callback;
        type = type || this.config.type || 'audio/wav';
        if (! this.currCallback) throw new Error('Callback not set');
        this.worker.postMessage({
            command: 'exportMonoWAV',
            type: type
        });
    }


    setupDownload(blob, filename) {
        var url = (window.URL || (window as any).webkitURL).createObjectURL(blob);
        var link:any = document.getElementById("save");
        link.href = url;
        link.download = filename || 'output.wav';
    }
    
    
}
