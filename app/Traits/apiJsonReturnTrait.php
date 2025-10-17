<?php

namespace App\Traits;

trait apiJsonReturnTrait
{
    public function returnJson($data, $message = '', $status_code = 200, $status = 'ok')
    {
        return response()->json([
            'status'  => $status,
            'code'    => $status_code,
            'message' => $message,
            'result'  => $data,
        ], $status_code);
    }

    protected function success($status, $message,$data,$code = 200)
    {
        return response()->json([
            'status'  => $status,
            'message' => $message,
            'result'     => $data,
        ], $code);
    }
    
    protected function returnData($status, $message, $data){
        return [
            'success' => $status,
            'message' => $message,
            'data' => $data
        ];
    }

    protected function error($status, $message,$data, $code)
    {
        return response()->json([
            'status'  => $status,
            'messages' => $message,
            'result'     => $data,
        ], $code);
    }
}
