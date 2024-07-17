const departments = {
    cardiology: { queue: [] },
    neurology: { queue: [] },
    dentistry: { queue: [] },
  };
  
  function getToken() {
    const selectedDepartment = document.getElementById("department-select").value;
    const queue = departments[selectedDepartment].queue;
  
    const newToken = queue.length + 1;
    queue.push(newToken);
  
    const tokenDisplay = document.getElementById("token-display");
    tokenDisplay.textContent = `Your token number for ${selectedDepartment} is: ${newToken}`;
  }
  