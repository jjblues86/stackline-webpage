import data from '../stackline_frontend_assessment_data_2021.json'

export const fetchData = async () => {
    // Simulate an API call
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
}