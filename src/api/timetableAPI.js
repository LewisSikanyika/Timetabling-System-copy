import axios from "./apiClient";

export const login = async(email, password) => {
    const response = await axios.post("/", {email, password});
    return response.data;
}

export const logout = async() => {
    const response = await axios.post("/logout", {});
    return response.data;
}

export const fetchAdminTimetable = async(program, year) => {
    const response = await axios.get("/timetable", {
        params: {program, year},
    });
    return response.data;
}

export const fetchUserTimetable = async() => {
    const response = await axios.get("/timetable", {
        params: {},
    });
    return response.data;
}

export const fetchLecturers = async() => {
    const response = await axios.get("/timetable/lecturers", {
        params: {},
    });
    return response.data;
}

export const fetchClassrooms = async() => {
    const response = await axios.get("/timetable/classes", {
        params: {},
    });
    return response.data;
}

export const fetchSchools = async(university) => {
    const response = await axios.get("/timetable/schools", {
        params: {university},
    });
    return response.data;
}

export const fetchPrograms = async(school) => {
    const response = await axios.get("/timetable/programs", {
        params: {school},
    });
    return response.data;
}

export const fetchCourses = async(program, year) => {
    const response = await axios.get("/timetable/courses", {
        params: {program, year},
    });
    return response.data;
}

export const fetchPendingUsers = async() => {
    const response = await axios.get("/pending", {
        params: {},
    });
    return response.data;
}

export const updatePendingUser = async(userId, role) => {
    const response = await axios.post("/update_pending", {userId, role});
    return response.data;
}

export const saveAdminTimetable = async(payload) => {

    const response = await axios.post("/timetable/save", payload, {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    });
    return response.data;
};


export const checkClash = async (payload) => {

    const response = await axios.post("/clash_detect", {
        entry: payload
    });
    return response.data;
};

export const lockClass = async () => {

    const response = await axios.get("/timetable/lock", {
        params: {},
    });
    return response.data;
};

export const releaseClass = async () => {

    const response = await axios.get("/timetable/release", {
        params: {},
    });
    return response.data;
};

export const rollbackTimetable = async (program, year) => {
    const response = await axios.get("/timetable", {
        params: { program, year, rollback: 1 },
    });
    return response.data;
};

export const unrollbackTimetable = async (program, year) => {
    const response = await axios.get("/timetable", {
        params: { program, year, rollback: -1 },
    });
    return response.data;
};



