<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArtResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return
        [ 'id' => $this->id,
            'title' => $this->title,
            'artist' => $this->artist,
            'image' =>$this->image,
    ];
    }
}
