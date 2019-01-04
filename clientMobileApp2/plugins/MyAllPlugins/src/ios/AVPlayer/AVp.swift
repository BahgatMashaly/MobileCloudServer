//
//  ViewController.swift
//  testvideo2
//
//  Created by Bahgat Mashaly on 5/24/16.
//  Copyright © 2016 Bahgat Mashaly. All rights reserved.
//

import UIKit
import MediaPlayer
import AVKit
import AVFoundation

class AVp: UIViewController {
    var mPMoviePlayer : MPMoviePlayerController?
    var aVPlayer:AVPlayer?;
     @IBOutlet weak var topConstraint: NSLayoutConstraint!
    var AudioVideoURL:URL!;
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if #available(iOS 9, *) { 
              aVPlayer = AVPlayer(url: AudioVideoURL)
            let playerViewController = AVPlayerViewController()
            playerViewController.player = aVPlayer
            playerViewController.view.frame = CGRect(x: 0 ,y: 67, width: self.view.frame.width  , height: self.view.bounds.height - 67  )
            self.view.addSubview(playerViewController.view)
            self.addChildViewController(playerViewController)
            aVPlayer!.play()
        }
        else
        {
            mPMoviePlayer = MPMoviePlayerController(contentURL: AudioVideoURL)
          //  moviePlayer!.view.frame =    CGRectMake(0 ,67, self.view.frame.width  , self.view.bounds.height - 67  )
               mPMoviePlayer!.controlStyle = .embedded
            mPMoviePlayer!.scalingMode = .aspectFit
            mPMoviePlayer!.prepareToPlay()
            self.view.addSubview(mPMoviePlayer!.view)
         }
    }
    
    
    
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
   
  override func  viewDidLayoutSubviews()
    {
        super.viewDidLayoutSubviews()
        if(UIDeviceOrientationIsLandscape(UIDevice.current.orientation))
        {
            if(mPMoviePlayer != nil)
            {
            mPMoviePlayer!.isFullscreen = true
            }
            self.topConstraint.constant = 0
            self.view.layoutIfNeeded()
        }
        
        if(UIDeviceOrientationIsPortrait(UIDevice.current.orientation))
        {
            // print("Portrait")//طولي
            self.topConstraint.constant = 22
            self.view.layoutIfNeeded()
        }
            if(mPMoviePlayer != nil)
            { 
            mPMoviePlayer!.view.frame =    CGRect(x: 0 ,y: 67, width: self.view.frame.width  , height: self.view.bounds.height - 67  )
            mPMoviePlayer!.scalingMode = .aspectFit
           }
        
    }
    
     @IBAction func BackButton(_ sender: UIButton)
     {
        if(mPMoviePlayer != nil)
        {
            mPMoviePlayer!.stop()
        }
        else
        {
            mPMoviePlayer?.stop()
        }
        self.dismiss(animated: true, completion: nil)
    }
    
    
    
}

