import doctorsData from '../assets/doctors.json'

const filterData = (doctorsData, searchParam) => {
    let filteredDoctors
  
  if (searchParam) {
    filteredDoctors = doctorsData.doctors.filter((el) => {
      const conditional =
        el.doctor.toLowerCase().includes(searchParam.toLowerCase()) ||
        el.actor.toLowerCase().includes(searchParam.toLowerCase());
      return conditional;
    });
  } else {
    filteredDoctors = doctorsData;
  }
  return filteredDoctors;
};
  
export default filterData;
    
    //doctor.actor.toLowerCase().includes(searchQuery.toLowerCase().trim())