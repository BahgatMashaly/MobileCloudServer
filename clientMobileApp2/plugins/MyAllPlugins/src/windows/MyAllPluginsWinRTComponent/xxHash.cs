 
 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices.WindowsRuntime;
namespace MyAllPluginsWinRTComponent
{
    public  static   class _state
    {


        private static ulong total_len;
        private static uint seed;
        private static uint v1;
        private static uint v2;
        private static uint v3;
        private static uint v4;
        private static int memsize;
        private static byte[] memory;

        public static ulong Total_len
        {
            get
            {
                return total_len;
            }

            set
            {
                total_len = value;
            }
        }

        public static uint Seed
        {
            get
            {
                return seed;
            }

            set
            {
                seed = value;
            }
        }

        public static uint V1
        {
            get
            {
                return v1;
            }

            set
            {
                v1 = value;
            }
        }

        public static uint V2
        {
            get
            {
                return v2;
            }

            set
            {
                v2 = value;
            }
        }

        public static uint V3
        {
            get
            {
                return v3;
            }

            set
            {
                v3 = value;
            }
        }

        public static uint V4
        {
            get
            {
                return v4;
            }

            set
            {
                v4 = value;
            }
        }

        public static int Memsize
        {
            get
            {
                return memsize;
            }

            set
            {
                memsize = value;
            }
        }

        public static byte[] Memory
        {
            get
            {
                return memory;
            }

            set
            {
                memory = value;
            }
        }
    }

    public sealed class xxHash
    {
      

        const uint PRIME32_1 = 2654435761U;
        const uint PRIME32_2 = 2246822519U;
        const uint PRIME32_3 = 3266489917U;
        const uint PRIME32_4 = 668265263U;
        const uint PRIME32_5 = 374761393U;

      
        public xxHash()
        {

        }

        public static uint CalculateHash([ReadOnlyArray()]byte[] buf, int len  , uint seed  )
        {
           
            uint h32;
            int index = 0;
            if (len == -1)
            {
                len = buf.Length;
            }


            if (len >= 16)
            {
                int limit = len - 16;
                uint v1 = seed + PRIME32_1 + PRIME32_2;
                uint v2 = seed + PRIME32_2;
                uint v3 = seed + 0;
                uint v4 = seed - PRIME32_1;

                do
                {
                    v1 = CalcSubHash(v1, buf, index);
                    index += 4;
                    v2 = CalcSubHash(v2, buf, index);
                    index += 4;
                    v3 = CalcSubHash(v3, buf, index);
                    index += 4;
                    v4 = CalcSubHash(v4, buf, index);
                    index += 4;
                } while (index <= limit);

                h32 = RotateLeft(v1, 1) + RotateLeft(v2, 7) + RotateLeft(v3, 12) + RotateLeft(v4, 18);
            }
            else
            {
                h32 = seed + PRIME32_5;
            }

            h32 += (uint)len;

            while (index <= len - 4)
            {
                h32 += BitConverter.ToUInt32(buf, index) * PRIME32_3;
                h32 = RotateLeft(h32, 17) * PRIME32_4;
                index += 4;
            }

            while(index<len)
            {
                h32 += buf[index] * PRIME32_5;
                h32 = RotateLeft(h32, 11) * PRIME32_1;
                index++;
            }

            h32 ^= h32 >> 15;
            h32 *= PRIME32_2;
            h32 ^= h32 >> 13;
            h32 *= PRIME32_3;
            h32 ^= h32 >> 16;

            return h32;
        }

        public void Init(uint seed )
        {
            _state.Seed = seed;
            _state.V1 = seed + PRIME32_1 + PRIME32_2;
            _state.V2 = seed + PRIME32_2;
            _state.V3 = seed + 0;
            _state.V4 = seed - PRIME32_1;
            _state.Total_len = 0;
            _state.Memsize = 0;
            _state.Memory = new byte[16];
        }

       
        public bool Update([ReadOnlyArray()] byte[] input, int len)
        {
            int index = 0;

            _state.Total_len += (uint)len;

            if (_state.Memsize + len < 16) // 버퍼 + 입력길이가 16바이트 이하일경우 버퍼에 저장만 해둔다
            {
                Array.Copy(input, 0, _state.Memory, _state.Memsize, len);
                _state.Memsize += len;

                return true;
            }

            if (_state.Memsize > 0) // 이전데이터가 남아있을경우 먼저 처리한다.
            {
                Array.Copy(input, 0, _state.Memory, _state.Memsize, 16 - _state.Memsize);

                _state.V1 = CalcSubHash(_state.V1, _state.Memory, index);
                index += 4;
                _state.V2 = CalcSubHash(_state.V2, _state.Memory, index);
                index += 4;
                _state.V3 = CalcSubHash(_state.V3, _state.Memory, index);
                index += 4;
                _state.V4 = CalcSubHash(_state.V4, _state.Memory, index);
                index += 4;

                index = 0;
                _state.Memsize = 0;
            }

            if (index <= len - 16)
            {
                int limit = len - 16;
                uint v1 = _state.V1;
                uint v2 = _state.V2;
                uint v3 = _state.V3;
                uint v4 = _state.V4;

                do
                {
                    v1 = CalcSubHash(v1, input, index);
                    index += 4;
                    v2 = CalcSubHash(v2, input, index);
                    index += 4;
                    v3 = CalcSubHash(v3, input, index);
                    index += 4;
                    v4 = CalcSubHash(v4, input, index);
                    index += 4;
                } while (index <= limit);

                _state.V1 = v1;
                _state.V2 = v2;
                _state.V3 = v3;
                _state.V4 = v4;
            }

            if (index < len)
            {
                Array.Copy(input, index, _state.Memory, 0, len - index);
                _state.Memsize = len - index;
            }
            return true;
        }

        public uint Digest()
        {
            uint h32;
            int index = 0;
            if (_state.Total_len >= 16)
            {
                h32 = RotateLeft(_state.V1, 1) + RotateLeft(_state.V2, 7) + RotateLeft(_state.V3, 12) + RotateLeft(_state.V4, 18);
            }
            else
            {
                h32 = _state.Seed + PRIME32_5;
            }

            h32 += (UInt32)_state.Total_len;

            while (index <= _state.Memsize - 4)
            {
                h32 += BitConverter.ToUInt32(_state.Memory, index) * PRIME32_3;
                h32 = RotateLeft(h32, 17) * PRIME32_4;
                index += 4;
            }

            while (index < _state.Memsize)
            {
                h32 += _state.Memory[index] * PRIME32_5;
                h32 = RotateLeft(h32, 11) * PRIME32_1;
                index++;
            }

            h32 ^= h32 >> 15;
            h32 *= PRIME32_2;
            h32 ^= h32 >> 13;
            h32 *= PRIME32_3;
            h32 ^= h32 >> 16;

            return h32;
        }
        private static uint CalcSubHash(uint value, byte[] buf, int index)
        {
            uint read_value = BitConverter.ToUInt32(buf, index);
            value += read_value * PRIME32_2;
            value = RotateLeft(value, 13);
            value *= PRIME32_1;
            return value;
        }

        private static uint RotateLeft(uint value, int count)
        {
            return (value << count) | (value >> (32 - count));
        }

    }
}
