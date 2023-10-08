export type IStudentFilterRequest = {
  searchTerm?: string | undefined;
  academicFacultyId?: string | undefined;
  academicDepartmentId?: string | undefined;
  academicSemesterId?: string | undefined;
  studentId?: string | undefined;
  email?: string | undefined;
  contactNo?: string | undefined;
  gender?: string | undefined;
  bloodGroup?: string | undefined;
};

export type IStudentMyCoursesRequest = {
  academicSemesterId?: string | undefined;
  courseId?: string | undefined;
};

export type IStudentMyCourseSchedulesRequest = {
  academicSemesterId?: string | undefined;
  courseId?: string | undefined;
};
