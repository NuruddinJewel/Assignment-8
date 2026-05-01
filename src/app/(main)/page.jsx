// import Banner from "@/components/Homepage/Banner";
// import FeaturedCourse from "@/components/Homepage/courses/FeaturedCourse";

import Banner from "@/components/Homepage/Banner";
import FeaturedCourse from "@/components/Homepage/FeaturedCourse";
import PopularCourses from "@/components/Homepage/PopularCourse";
import { getCourses } from "@/lib/data";
// import FeaturedCourse from "@/components/Homepage/FeaturedCourse";

const HomePage = async () => {
    const courses = await getCourses();
    return (
        <>
            <Banner />
            <PopularCourses courses={courses} />
            <FeaturedCourse courses={courses} />
        </>
    );
};

export default HomePage;