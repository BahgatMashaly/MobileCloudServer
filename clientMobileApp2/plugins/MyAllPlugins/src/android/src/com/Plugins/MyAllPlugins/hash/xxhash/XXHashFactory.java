package com.Plugins.MyAllPlugins.hash.xxhash;
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import android.util.Log;

import java.lang.reflect.Field;
import java.util.Random;

import com.Plugins.MyAllPlugins.hash.util.Native;
import com.Plugins.MyAllPlugins.hash.util.Utils;



public final class XXHashFactory {

  private static XXHashFactory instance(String impl) {
    try {
      return new XXHashFactory(impl);
    } catch (Exception e) {
      throw new AssertionError(e);
    }
  }

  private static XXHashFactory NATIVE_INSTANCE,
                               JAVA_UNSAFE_INSTANCE,
                               JAVA_SAFE_INSTANCE;

  /** Return a {@link XXHashFactory} that returns {@link XXHash32} instances that
   *  are native bindings to the original C API.
   * <p>
   * Please note that this instance has some traps you should be aware of:<ol>
   * <li>Upon loading this instance, files will be written to the temporary
   * directory of the system. Although these files are supposed to be deleted
   * when the JVM exits, they might remain on systems that don't support
   * removal of files being used such as Windows.
   * <li>The instance can only be loaded once per JVM. This can be a problem
   * if your application uses multiple class loaders (such as most servlet
   * containers): this instance will only be available to the children of the
   * class loader which has loaded it. As a consequence, it is advised to
   * either not use this instance in webapps or to put this library in the lib
   * directory of your servlet container so that it is loaded by the system
   * class loader.
   * </ol>
   */
//  public static synchronized XXHashFactory nativeInstance() {
//    if (NATIVE_INSTANCE == null) {
//      NATIVE_INSTANCE = instance("JNI");
//    }
//    return NATIVE_INSTANCE;
//  }

  /** Return a {@link XXHashFactory} that returns {@link  } instances that
   *  are written with Java's official API. */
  public static synchronized XXHashFactory safeInstance() {
    if (JAVA_SAFE_INSTANCE == null) {
      JAVA_SAFE_INSTANCE = instance("JavaSafe");
    }
    return JAVA_SAFE_INSTANCE;
  }




  @SuppressWarnings("unchecked")
  private static <T> T classInstance(String cls) throws NoSuchFieldException, SecurityException, ClassNotFoundException, IllegalArgumentException, IllegalAccessException {
    ClassLoader loader = XXHashFactory.class.getClassLoader();
    loader = loader == null ? ClassLoader.getSystemClassLoader() : loader;
    final Class<?> c = loader.loadClass(cls);
    Field f = c.getField("INSTANCE");
    return (T) f.get(null);
  }

  private final String impl;
  //private final XXHash32 hash32;

  private final StreamingXXHash32.Factory streamingHash32Factory;

  private XXHashFactory(String impl) throws ClassNotFoundException, NoSuchFieldException, SecurityException, IllegalArgumentException, IllegalAccessException {
    this.impl = impl;
 streamingHash32Factory = classInstance("com.Plugins.MyAllPlugins.hash.xxhash.StreamingXXHash32" + impl + "$Factory");

//    int seed=123;
//    byte[] bytes = "hi".getBytes();
//
//    final StreamingXXHash32 streamingHash32 = newStreamingHash32(seed);
//    streamingHash32.update(bytes, 0, bytes.length);
//
//    final long h2 = streamingHash32.getValue()& 0xFFFFFFFFL;
//
//


  }



  /** Return a {@link XXHash64} instance. */

  /**
   * Return a new {@link StreamingXXHash32} instance.
   */
  public StreamingXXHash32 newStreamingHash32(int seed) {
    return streamingHash32Factory.newStreamingHash(seed);
  }



  @Override
  public String toString() {
    return getClass().getSimpleName() + ":" + impl;
  }

}
