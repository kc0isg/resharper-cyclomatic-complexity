function(age, name, isAdmin) {
  var result = false;
  var value = false;

  if (name === "Sarah") {
    if (age < 20 || age > 100) {
      if (isAdmin) {
        result = true;
        value = true;
      }
      else if (age == 42) {
        result = false;
      }
      else {
        result = true;
      }
    }
  }
  else if (name == "Gentry" && isAdmin) {
    result = false;
  }
  else {
    if (age == 50) {
      if (isAdmin) {
        if (name == "Amrit") {
          result = false;
        }
        else if (name == "Jane") {
          result = true;
        }
        else {
          result = false;
        }
      }
    }
  }

  return result;
}
