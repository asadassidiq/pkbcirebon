<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Utils
{
    public function generateUUID()
    {
        $uuid = Str::uuid();
        return $uuid->toString();
    }

    public function repairMissingUUID(Model $data)
    {
        if (!$data->property_exists('uuid'))
            return $data;

        if (empty($data->uuid)) {
            $data->uuid = $this->generateUUID();
            $data->saveOrFail();
        }

        return $data;
    }
}
