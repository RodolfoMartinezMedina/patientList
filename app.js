const patientList = [
  'Raul',
  'Jon',
  'Pancho',
  'Maria'
  ]
  
  alert(patientList);
  
  while (true){
  const command = prompt('Welcome to the GA Hospital Welcome list. Choose one of the following: update, delete, add, reorder');
  
  
  if (command === 'add'){
    const addname = prompt ('Whos the sick man getting added?');
    alert('Thank you. The patient has been added to the waiting list.');
    if (!patientList.includes(addname)){
      patientList.push(addname);
    }
    alert(patientList);
  }
  
  else if (command === 'delete'){
    const delname = prompt('Who is getting deleted?');
    const delname1 = patientList.indexOf(delname);
    patientList.splice(delname1,1);
    alert('Thank you. The sick man will now not get taken care of.');
    alert(patientList);
  }
  
  
  //If the user typed in 'update', prompt them for a patient name,  prompt them for a new name, update the name to the new name, and display the list.
  else if (command === 'update'){
     let currentname = prompt ('Which patient do you want to update');
     let x = patientList.indexOf(currentname);
     const newname = prompt ('What is the new patient');
     patientList[x] = newname;
     alert('The Patient has been updated');
     alert(patientList);
  }
  
  else if (command === 'reorder'){
    let reorder = prompt('Who do you want to reorder?')
    let reorder2 = prompt('who do you want to swap?')
    let x = patientList.indexOf(reorder);
    let y = patientList.indexOf(reorder2);
    patientList.splice(x,1,reorder2);
    patientList.splice(y,1,reorder);
    alert('The patients have been swapped');
    alert(patientList);

  }
  
  }

