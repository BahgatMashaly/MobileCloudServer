package org.sipdroid.codecs;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;

/**
 * Created by Bahgat on 5/6/2014.
 */
public class NoCodec   extends CodecBase implements Codec
{
    NoCodec() {
        CODEC_NAME = "NoCodec";
        CODEC_USER_NAME = "NoCodec";
        CODEC_DESCRIPTION = "NoCodec";
        CODEC_NUMBER = 8;
        CODEC_DEFAULT_SETTING = "NoCodec";

        load();
    }

    public void init() {

    }

    public int decode(byte enc[], short lin[], int frames) {

          enc = new byte[lin.length * 2];
        ByteBuffer.wrap(enc).order(ByteOrder.LITTLE_ENDIAN).asShortBuffer().put(lin);
        return frames;
    }

    public int encode(short lin[], int offset, byte enc[], int frames) {

                enc=new byte[enc.length*2];
        ByteBuffer.wrap(enc).order(ByteOrder.LITTLE_ENDIAN).asShortBuffer().get(lin);
        return frames;
    }

    public void close() {
    }
}
