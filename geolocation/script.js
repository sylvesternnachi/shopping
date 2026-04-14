  // Current Position
  
  function CurSuccess(pos){

    const coords = pos.coords;
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
    console.log(`Within: ${coords.accuracy} meters`);
 }

  function curError(err){
    console.log(`Error: ${err.code} - ${err.message}`);
 }
 
 const Curoptions = {
    enableHighAccuracy: true , // Use GPS if available
    timeout: 5000, // time to wait to stop trying for location
    maximumAge: 0,
 };

navigator.geolocation.getCurrentPosition(CurSuccess,curError,Curoptions);



 //Watch Position ();

    const target = {
        latitude: 6.475359916687009,
        longitude:3.331402540206908
    }

   function WatchSuccess(pos){

    const coords = pos.coords;
   if(target.latitude === coords.latitude && target.longitude === coords.longitude){
    console.log('You have reached your destination');
    navigator.geolocation.clearWatch(watchId )
   }
 }

  function WatchError(err){
    console.log(`Error: ${err.code} - ${err.message}`);
 }
 
 const WatchOptions = {
    enableHighAccuracy: true , // Use GPS if available
    timeout: 5000, // time to wait to stop trying for location
    maximumAge: 0,
 };

const watchId = navigator.geolocation.watchPosition(WatchSuccess,WatchError,WatchOptions);

 

