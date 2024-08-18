<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreArtRequest;
use App\Models\Art;
use App\Http\Resources\V1\ArtResource;
use Illuminate\Support\Facades\Storage;

class ArtController extends Controller
{

// INDEX DISPLAY ALL THE DATA
    public function index(){
        return ArtResource::collection(Art::all());
    }
// SHOW
public function show(Art $art){

    return new ArtResource($art);
}
// SAVE FUNCTION
public function store(StoreArtRequest $request)
{
    $data = $request->validated();

    if ($request->hasFile('image')) {
        $imagePath = $request->file('image')->store('images', 'public');
        $data['image'] = $imagePath;
    }

    Art::create($data);

    return response()->json(['Art created']);
}
// UPDATE FUNCTION
public function update(StoreArtRequest $request, Art $art)
{
    $data = $request->validated();

    if ($request->hasFile('image')) {
        if ($art->image) {
            Storage::delete('public/' . $art->image);
        }
        $imagePath = $request->file('image')->store('images', 'public');
        $data['image'] = $imagePath;
    }

    $art->update($data);

    return response()->json(['Art updated']);
}
    // DELETE FUNCTION
public function destroy(Art $art){
    $art->delete();
    return response()->json(['art deleted']);
}

}
