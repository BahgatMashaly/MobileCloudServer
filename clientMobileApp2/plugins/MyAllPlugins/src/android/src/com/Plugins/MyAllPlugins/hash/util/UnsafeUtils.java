//
////
//// Source code recreated from a .class file by IntelliJ IDEA
//// (powered by Fernflower decompiler)
////
//
//package com.Plugins.MyAllPlugins.hash.util;
//
//import java.lang.reflect.Field;
//import java.nio.ByteOrder;
//
//
//public enum UnsafeUtils {;
//    private static final Unsafe UNSAFE;
//    private static final long BYTE_ARRAY_OFFSET;
//    private static final int BYTE_ARRAY_SCALE;
//    private static final long INT_ARRAY_OFFSET;
//    private static final int INT_ARRAY_SCALE;
//    private static final long SHORT_ARRAY_OFFSET;
//    private static final int SHORT_ARRAY_SCALE;
//
//    private UnsafeUtils() {
//    }
//
//    public static byte readByte(byte[] src, int srcOff) {
//
//        byte x=new Byte("ww") ;
//                return x;
//     //   return UNSAFE.getByte(src, BYTE_ARRAY_OFFSET + (long) (BYTE_ARRAY_SCALE * srcOff));
//    }
//
//    public static void writeByte(byte[] src, int srcOff, byte value) {
//       // UNSAFE.putByte(src, BYTE_ARRAY_OFFSET + (long)(BYTE_ARRAY_SCALE * srcOff), value);
//    }
//
//    public static void writeByte(byte[] src, int srcOff, int value) {
//        writeByte(src, srcOff, (byte)value);
//    }
//
//    public static long readLong(byte[] src, int srcOff) {
//        return UNSAFE.getLong(src, BYTE_ARRAY_OFFSET + (long)srcOff);
//    }
//
//    public static void writeLong(byte[] dest, int destOff, long value) {
//        UNSAFE.putLong(dest, BYTE_ARRAY_OFFSET + (long)destOff, value);
//    }
//
//    public static int readInt(byte[] src, int srcOff) {
//        return UNSAFE.getInt(src, BYTE_ARRAY_OFFSET + (long)srcOff);
//    }
//
//    public static int readIntLE(byte[] src, int srcOff) {
//        int i = readInt(src, srcOff);
//        if(Utils.NATIVE_BYTE_ORDER == ByteOrder.BIG_ENDIAN) {
//            i = Integer.reverseBytes(i);
//        }
//
//        return i;
//    }
//
//    public static void writeInt(byte[] dest, int destOff, int value) {
//        UNSAFE.putInt(dest, BYTE_ARRAY_OFFSET + (long)destOff, value);
//    }
//
//    public static short readShort(byte[] src, int srcOff) {
//        short x=4;
//        return  x;
//       // return UNSAFE.getShort(src, BYTE_ARRAY_OFFSET + (long)srcOff);
//    }
//
//    public static void writeShort(byte[] dest, int destOff, short value) {
//       // UNSAFE.putShort(dest, BYTE_ARRAY_OFFSET + (long)destOff, value);
//    }
//
//    public static int readInt(int[] src, int srcOff) {
//        return UNSAFE.getInt(src, INT_ARRAY_OFFSET + (long)(INT_ARRAY_SCALE * srcOff));
//    }
//
//    public static void writeInt(int[] dest, int destOff, int value) {
//        UNSAFE.putInt(dest, INT_ARRAY_OFFSET + (long)(INT_ARRAY_SCALE * destOff), value);
//    }
//
//    public static int readShort(short[] src, int srcOff) {
//        int x=3;
//        return  x;
//       // return UNSAFE.getShort(src, SHORT_ARRAY_OFFSET + (long)(SHORT_ARRAY_SCALE * srcOff)) & '\uffff';
//    }
//
//    public static void writeShort(short[] dest, int destOff, int value) {
//      //  UNSAFE.putShort(dest, SHORT_ARRAY_OFFSET + (long)(SHORT_ARRAY_SCALE * destOff), (short)value);
//    }
//
//    static {
//        try {
//            Field e = Unsafe.class.getDeclaredField("theUnsafe");
//            e.setAccessible(true);
//            UNSAFE = (Unsafe)e.get((Object)null);
//            BYTE_ARRAY_OFFSET = (long)UNSAFE.arrayBaseOffset(byte[].class);
//            BYTE_ARRAY_SCALE = UNSAFE.arrayIndexScale(byte[].class);
//            INT_ARRAY_OFFSET = (long)UNSAFE.arrayBaseOffset(int[].class);
//            INT_ARRAY_SCALE = UNSAFE.arrayIndexScale(int[].class);
//            SHORT_ARRAY_OFFSET = (long)UNSAFE.arrayBaseOffset(short[].class);
//            SHORT_ARRAY_SCALE = UNSAFE.arrayIndexScale(short[].class);
//        } catch (IllegalAccessException var1) {
//            throw new ExceptionInInitializerError("Cannot access Unsafe");
//        } catch (NoSuchFieldException var2) {
//            throw new ExceptionInInitializerError("Cannot access Unsafe");
//        } catch (SecurityException var3) {
//            throw new ExceptionInInitializerError("Cannot access Unsafe");
//        }
//    }
//}
//
