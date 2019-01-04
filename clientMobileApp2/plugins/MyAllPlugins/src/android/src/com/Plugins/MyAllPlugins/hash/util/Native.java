//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.Plugins.MyAllPlugins.hash.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

public enum Native {;
  private static boolean loaded = false;

  private Native() {
  }

  private static String arch() {
    return System.getProperty("os.arch");
  }

  private static Native.OS os() {
    String osName = System.getProperty("os.name");
    if(osName.contains("Linux")) {
      return Native.OS.LINUX;
    } else if(osName.contains("Mac")) {
      return Native.OS.MAC;
    } else if(osName.contains("Windows")) {
      return Native.OS.WINDOWS;
    } else if(osName.contains("Solaris")) {
      return Native.OS.SOLARIS;
    } else {
      throw new UnsupportedOperationException("Unsupported operating system: " + osName);
    }
  }

  private static String resourceName() {
    Native.OS os = os();
    return "/" + os.name + "/" + arch() + "/liblz4-java." + os.libExtension;
  }

  public static synchronized boolean isLoaded() {
    return loaded;
  }

  public static synchronized void load() {
    if(!loaded) {
      String resourceName = resourceName();
      InputStream is = Native.class.getResourceAsStream(resourceName);
      if(is == null) {
        throw new UnsupportedOperationException("Unsupported OS/arch, cannot find " + resourceName + ". Please try building from source.");
      } else {
        try {
          File tempLib = File.createTempFile("liblz4-java", "." + os().libExtension);
          FileOutputStream e = new FileOutputStream(tempLib);

          try {
            byte[] e1 = new byte[4096];

            while(true) {
              int e2 = is.read(e1);
              if(e2 == -1) {
                try {
                  e.close();
                  e = null;
                } catch (IOException var14) {
                  ;
                }

                System.load(tempLib.getAbsolutePath());
                loaded = true;
                return;
              }

              e.write(e1, 0, e2);
            }
          } finally {
            try {
              if(e != null) {
                e.close();
              }
            } catch (IOException var13) {
              ;
            }

            if(tempLib != null && tempLib.exists()) {
              if(!loaded) {
                tempLib.delete();
              } else {
                tempLib.deleteOnExit();
              }
            }

          }
        } catch (IOException var16) {
          throw new ExceptionInInitializerError("Cannot unpack liblz4-java");
        }
      }
    }
  }

  private static enum OS {
    WINDOWS("win32", "so"),
    LINUX("linux", "so"),
    MAC("darwin", "dylib"),
    SOLARIS("solaris", "so");

    public final String name;
    public final String libExtension;

    private OS(String name, String libExtension) {
      this.name = name;
      this.libExtension = libExtension;
    }
  }
}
