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

enum XXHashConstants {
  ;

  static final int PRIME1 =-1640531535;//(int)2654435761L;//-1640531535;// 506952113;//-1640531535;//2654435761L ;
  static final int PRIME2 =-2048144777;//(int)2246822519L;//-2048144777;//99338871;//-2048144777; //2246822519L;
  static final int PRIME3 =-1028477379;//(int)3266489917L;//-1028477379;// 1119006269;//-1028477379;//3266489917L;//;
  static final int PRIME4 = 668265263;
  static final int PRIME5 = 374761393;

//  static  final  int PRIME1 = 506952113; // 2654435761L & 0x7FFFFFFF
//  static  final  int PRIME2 = 99338871; // 2246822519L & 0x7FFFFFFF
//  static    final  int PRIME3 = 1119006269; // 3266489917L & 0x7FFFFFFF
//  static    final  int PRIME4 = 668265263;
//  static    final  int PRIME5 = 374761393;

//  static final long PRIME64_1 = -7046029288634856825L; //11400714785074694791
//  static final long PRIME64_2 = -4417276706812531889L; //14029467366897019727
//  static final long PRIME64_3 = 1609587929392839161L;
//  static final long PRIME64_4 = -8796714831421723037L; //9650029242287828579
//  static final long PRIME64_5 = 2870177450012600261L;


//  #define PRIME32_1   2654435761U
//  #define PRIME32_2   2246822519U
//  #define PRIME32_3   3266489917U
//  #define PRIME32_4    668265263U
//  #define PRIME32_5    374761393U

//  #define PRIME64_1 11400714785074694791ULL
//  #define PRIME64_2 14029467366897019727ULL
//  #define PRIME64_3  1609587929392839161ULL
//  #define PRIME64_4  9650029242287828579ULL
//  #define PRIME64_5  2870177450012600261ULL
}
