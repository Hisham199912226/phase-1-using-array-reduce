const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteryReducer(batteries){

  return batteries.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

}

const totalBatteries = batteryReducer(batteryBatches);

