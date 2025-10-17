<?php

namespace App\Traits;

class CryptHelper
{
    public static function encrypt($input, $key)
    {
        return self::crypt($input, $key, true);
    }

    public static function decrypt($input, $key)
    {
        return self::crypt($input, $key, false);
    }

    private static function crypt($input, $key, $encrypt = true)
    {
        $output = '';
        $keyArray = self::filterKey($key);

        for ($i = 0, $j = 0; $i < strlen($input); $i++) {
            $c = ord($input[$i]);

            if (self::isUppercase($c)) {
                $shift = $encrypt ? $keyArray[$j % count($keyArray)] : (26 - $keyArray[$j % count($keyArray)]);
                $output .= chr((($c - 65 + $shift) % 26) + 65);
                $j++;
            } elseif (self::isLowercase($c)) {
                $shift = $encrypt ? $keyArray[$j % count($keyArray)] : (26 - $keyArray[$j % count($keyArray)]);
                $output .= chr((($c - 97 + $shift) % 26) + 97);
                $j++;
            } else {
                $output .= $input[$i];
            }
        }

        return $output;
    }

    private static function filterKey($key)
    {
        $result = [];
        for ($i = 0; $i < strlen($key); $i++) {
            $c = ord($key[$i]);
            if (self::isLetter($c)) {
                $result[] = ($c - 65) % 32;
            }
        }
        return $result;
    }

    private static function isUppercase($c)
    {
        return $c >= 65 && $c <= 90;
    }

    private static function isLowercase($c)
    {
        return $c >= 97 && $c <= 122;
    }

    private static function isLetter($c)
    {
        return self::isUppercase($c) || self::isLowercase($c);
    }
}
