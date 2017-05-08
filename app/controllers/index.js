var UIScreen = require('UIKit/UIScreen'),
    UIViewController = require('UIKit/UIViewController'),
    UIView = require('UIKit/UIView'),
    UIColor = require('UIKit/UIColor'),
    CGPointMake = require('CoreGraphics').CGPointMake,
    CGRectMake = require('CoreGraphics').CGRectMake,
    NSBundle = require('Foundation/NSBundle'),
    NSURL = require('Foundation/NSURL'),
    NSData = require('Foundation/NSData'),
    AVPlayer = require('AVFoundation/AVPlayer'),
    AVPlayerLayer = require('AVFoundation/AVPlayerLayer'),
    UIColor = require('UIKit/UIColor'),
    UIPanGestureRecognizer = require('UIKit/UIPanGestureRecognizer'),
    NSString = require("Foundation/NSString"),
    UIImage = require('UIKit/UIImage'),
    UIImageView = require('UIKit/UIImageView'),
    NSFileManager = require('Foundation/NSFileManager'),
    UIControlStateNormal = require("UIKit").UIControlStateNormal,
    UIControlStateSelected = require("UIKit").UIControlStateSelected,
    UIControlEventTouchUpInside = require("UIKit").UIControlEventTouchUpInside,
    SYFavoriteButton = require('SYFavoriteButton'),
    UITapGestureRecognizer = require('UIKit/UITapGestureRecognizer');

var urlPath = NSURL.alloc().initWithString("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/394px-Love_Heart_symbol.svg.png");
var data = NSData.alloc().initWithContentsOfURL(urlPath);

var string = NSString.alloc().initWithString("logo");

var image = UIImage.alloc().initWithData(data);

var frame = CGRectMake(100, 100, 128, 128);
var favoriteButton = SYFavoriteButton.alloc().initWithFrame(frame);

favoriteButton.setImage(image);

favoriteButton.setImage(image);
favoriteButton.duration = 1;
favoriteButton.defaultColor = UIColor.lightGrayColor;
favoriteButton.lineColor = UIColor.purpleColor;
favoriteButton.favoredColor = UIColor.redColor;
favoriteButton.circleColor = UIColor.yellowColor;
favoriteButton.userInteractionEnabled = true;
favoriteButton.selected = false;

var view = new UIView();
var ButtonDelegate = Hyperloop.defineClass('ButtonDelegate', 'NSObject');

ButtonDelegate.addMethod({
    selector : 'buttonAction:',
    instance : true,
    arguments : ['SYFavoriteButton'],
    callback : function(sender) {
        if (this.buttonAction) {
            this.buttonAction(sender);
        }
    }
});

var delegate = new ButtonDelegate();
var buttonState = false;

delegate.buttonAction = function(sender) {
    if (buttonState == true) {
        sender.selected = false;
    } else {
        sender.selected = true;
    }

    buttonState = !buttonState;
};

favoriteButton.addTargetActionForControlEvents(delegate, "buttonAction:", UIControlEventTouchUpInside);
view.frame = CGRectMake(0, 0, 300, 300);
view.addSubview(favoriteButton);
$.index.add(view);
$.index.open();
