export const getCourses = async () => {
    const res = await fetch("https://json-server-2-whcn.onrender.com/courses", {
        cache: "no-store", // সবসময় fresh data
    });

    if (!res.ok) {
        throw new Error("Failed to fetch courses");
    }

    return res.json();
};