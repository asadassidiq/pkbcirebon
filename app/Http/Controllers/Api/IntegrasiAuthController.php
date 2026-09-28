<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ApiClient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class IntegrasiAuthController extends Controller
{
    public function token(Request $request)
    {
        $request->validate([
            'client_id' => ['required', 'string'],
            'client_secret' => ['required', 'string'],
        ]);

        $client = ApiClient::with('user')
            ->where('client_id', $request->client_id)
            ->where('active', true)
            ->first();

        if (!$client) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid client credentials',
            ], 401);
        }

        if (!Hash::check(
            $request->client_secret,
            $client->client_secret
        )) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid client credentials',
            ], 401);
        }

        $token = $client->user->createToken(
            'E-KIR',
            $client->abilities
        );

        return response()->json([
            'success' => true,
            'token' => $token->plainTextToken,
            'token_type' => 'Bearer',
            'expires_in' => 28800,
        ]);
    }
}