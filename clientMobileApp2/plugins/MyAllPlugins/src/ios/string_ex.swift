//
//  string_ex.swift
//  TelecomEgypt
//
//  Created by Bahgat on 11/25/14.
//  Copyright (c) 2014 Telecom Egypt. All rights reserved.
//

import Foundation

extension String
{
    var length: Int {
        get {
            return self.characters.count
        }
    }
    
    func contains(_ s: String) -> Bool {
        return self.range(of: s) != nil ? true : false
    }
    
    func replace(_ target: String, withString: String) -> String {
        return self.replacingOccurrences(of: target, with: withString, options: NSString.CompareOptions.literal, range: nil)
    }
    
    subscript (i: Int) -> Character {
        get {
            let index = characters.index(startIndex, offsetBy: i)
            return self[index]
        }
    }
    
    subscript (r: CountableClosedRange<Int>) -> String  {
        get {
            let startIndex =  self.index(self.startIndex, offsetBy: r.lowerBound)
            let endIndex = self.index(startIndex, offsetBy: r.upperBound - r.lowerBound)
            
            //            let startIndex = self.characters.index(self.startIndex, offsetBy: r.lowerBound)
            //            let endIndex = self.characters.index(self.startIndex, offsetBy: r.upperBound - 1)
            //  return self[(startIndex ..< endIndex)]
            return String(self[startIndex ..< endIndex])
        }
    }
    
    func subString(_ startIndex: Int, length: Int) -> String {
        let start = self.characters.index(self.startIndex, offsetBy: startIndex)
        let end = self.characters.index(self.startIndex, offsetBy: startIndex + length)
        return self.substring(with: (start ..< end))
    }
    
    func indexOf(_ target: String) -> Int {
        let range = self.range(of: target)
        if let range = range {
            return self.characters.distance(from: self.startIndex, to: range.lowerBound)
        } else {
            return -1
        }
    }
    
    func indexOf(_ target: String, startIndex: Int) -> Int {
        let startRange = self.characters.index(self.startIndex, offsetBy: startIndex)
        
        let range = self.range(of: target, options: NSString.CompareOptions.literal, range: (startRange ..< self.endIndex))
        
        if let range = range {
            return self.characters.distance(from: self.startIndex, to: range.lowerBound)
        } else {
            return -1
        }
    }
    
    func lastIndexOf(_ target: String) -> Int {
        var index = -1
        var stepIndex = self.indexOf(target)
        while stepIndex > -1 {
            index = stepIndex
            if stepIndex + target.length < self.length {
                stepIndex = indexOf(target, startIndex: stepIndex + target.length)
            } else {
                stepIndex = -1
            }
        }
        return index
    }
    
    func isMatch(_ regex: String, options: NSRegularExpression.Options) -> Bool {
        var exp:NSRegularExpression?
        
        do {
            exp = try NSRegularExpression(pattern: regex, options: options)
            
        } catch let error as NSError {
            exp = nil
            print(error.description)
            return false
        }
        
        let matchCount = exp!.numberOfMatches(in: self, options: [], range: NSMakeRange(0, self.length))
        return matchCount > 0
    }
    
    func getMatches(_ regex: String, options: NSRegularExpression.Options) -> [NSTextCheckingResult] {
        var exp:NSRegularExpression?
        
        do {
            exp = try NSRegularExpression(pattern: regex, options: options)
        } catch let error as NSError {
            print(error.description)
            exp = nil
            return []
        }
        
        let matches = exp!.matches(in: self, options: [], range: NSMakeRange(0, self.length))
        return matches
    }
    
    fileprivate var vowels: [String] {
        get {
            return ["a", "e", "i", "o", "u"]
        }
    }
    
    fileprivate var consonants: [String] {
        get {
            return ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
        }
    }
    
    func pluralize(_ count: Int) -> String {
        if count == 1 {
            return self
        } else {
            let lastChar = self.subString(self.length - 1, length: 1)
            let secondToLastChar = self.subString(self.length - 2, length: 1)
            var prefix = "", suffix = ""
            
            if lastChar.lowercased() == "y" && vowels.filter({x in x == secondToLastChar}).count == 0 {
                prefix = self[0...self.length - 1]
                suffix = "ies"
            } else if lastChar.lowercased() == "s" || (lastChar.lowercased() == "o" && consonants.filter({x in x == secondToLastChar}).count > 0) {
                prefix = self[0...self.length]
                suffix = "es"
            } else {
                prefix = self[0...self.length]
                suffix = "s"
            }
            
            return prefix + (lastChar != lastChar.uppercased() ? suffix : suffix.uppercased())
        }
    }
    
    //    var escapeStr: String {
    //         var raw: CFString = self   as NSString
    //        return CFURLCreateStringByAddingPercentEscapes(kCFAllocatorDefault,raw  , "[]." as CFString,":/?&=;+!@#$()',*",CFStringConvertNSStringEncodingToEncoding(NSUTF8StringEncoding))
    //    }
    //
    //
    //    func urlEncoding(string: String!) -> String! {
    //        let utf8enc: CFStringEncoding = 0x08000100
    //        let cfstring = string as NSString
    //        let escapedStr = CFURLCreateStringByAddingPercentEscapes(kCFAllocatorDefault, cfstring as CFString, "" as CFString, "!*'();:@&=+$,/?%#[]~", utf8enc) as String
    //        return escapedStr
    //    }
    
    
    
    func my_unicode()->String
    {
        
        let raw: CFString = self   as NSString
        let xx =  CFURLCreateStringByAddingPercentEscapes(
            nil,
            raw,
            nil,
            "!*'();:@&=+$,/?%#[]" as CFString,
            CFStringBuiltInEncodings.UTF8.rawValue)
        
        return (xx as! NSString as String)
    }
    
    func stringByAppendingPathComponent(_ path: String) -> String {
        
        let nsSt = self as NSString
        
        return nsSt.appendingPathComponent(path)
    }
    
    
    
    public var dataValue: Data {
        return data(using: String.Encoding.utf8, allowLossyConversion: false)!
    }
    
    
    
}



extension Data {
    public var stringValue: String {
        return NSString(data: self, encoding: String.Encoding.utf8.rawValue)! as String
    }
}
