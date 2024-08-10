<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreArtRequest;
use App\Models\Art;
use App\Http\Resources\V1\ArtResource;

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
    public function store(StoreArtRequest $request){
    
        Art::create($request->validated());

        return response()->json(['Art created']);
    }
// UPDATE FUNCTION
    public function update(StoreArtRequest $request, Art $art){
        $art->update($request->validated());
        return response()->json(['Art updated']);

    }
    // DELETE FUNCTION
public function destroy(Art $art){
    $art->delete();
    return response()->json(['art deleted']);
}

}
