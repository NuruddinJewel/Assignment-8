export const getCourses = async () => {
    const res = await fetch("https://json-server-3-fxsb.onrender.com/courses", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch courses");
    }

    return res.json();
};