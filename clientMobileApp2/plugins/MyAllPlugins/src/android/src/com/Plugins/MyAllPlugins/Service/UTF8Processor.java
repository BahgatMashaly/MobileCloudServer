package com.Plugins.MyAllPlugins.Service;

import java.io.UnsupportedEncodingException;

/**
 * Created by Bahgat on 4/5/16.
 */
class UTF8Processor {
    private byte[] buffer = new byte[6];
    private int count = 0;

    public String processByte(byte nextByte) throws UnsupportedEncodingException {
        buffer[count++] = nextByte;
        if(count == expectedBytes())
        {
            String result = new String(buffer, 0, count, "UTF-8");
            count = 0;
            return result;
        }
        return "";
    }

    private int expectedBytes() {
        int num = buffer[0] & 255;
        if(num < 0x80) return 1;
        if(num < 0xe0) return 2;
        if(num < 0xf0) return 3;
        if(num < 0xf8) return 4;
        return 5;
    }
}