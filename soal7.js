const biodata = {
    name: 'Laila Ali',
    age: 20,
    college: 'University of Indonesia',
    hobbies: {
        sleeping: 'sleeping',
        shopping: 'shopping',
    },
    address: {
        street: 'Kemang Raya',
        province: 'Jakarta Selatan',
        country: 'Indonesia',
    },
    contact: {
        email: 'laila@gmail.com',
        phone: {
            countryCode: 021,
            number: 153138,
        },
    },
    skills: {
        language: 'english',
        programming: {
            language: 'javascript',
            framework1: 'react.js',
            language2: 'java',
            language3: 'C++',
        },
    },
};

console.log(
    "hi, my name is " + biodata.name + "i studied in " + biodata.college + ", My programming skills are " + biodata.skills.language + " including use it framework " 
    + biodata.skills.programming.framework1 + ' ' + biodata.skills.programming.language2 + ' ' + biodata.skills.programming.language3 + " during school, i compete in many sports including hiking and running, my hobbies are " 
    + biodata.hobbies.sleeping + ' and ' + biodata.hobbies.shopping + '. right now i live at ' + biodata.address.street + ' ' + biodata.address.province + ' ' + biodata.address.country + ' you can reach me on email ' + 
    biodata.contact.email + ' or my phone number ' + biodata.contact.phone.countryCode + " " + biodata.contact.phone.number + ' thank you, and have a nice day'

)