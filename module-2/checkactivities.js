let checkActivities = function(name, activities){
    if(activities.length === 0){
        return "No activities recorded for today";
    }

    if (activities[0] !== "Wake up") {
         activities.unshift("Wake up");
     }

     if(activities.includes("Wake up")){
        activities.push("Sleep");
     }

    //checktotal activities by activities length

    const totalActivities = activities.length;

    //check status
    let status;

    if(totalActivities >= 4){
        status = 'very active';
    }else if (totalActivities >= 2){
        status = 'Less active';
    }else{
        status = 'Not active';
    }

    return {
        name: name,
        status : status,
        activities: activities,
        totalActivities: totalActivities
    };

};

console.log(checkActivities('John', ['Wake up','Business','Travels']));