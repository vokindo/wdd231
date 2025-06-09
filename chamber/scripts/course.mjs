const byuiCourse = {
  code: "CIT 111",
  name: "Introduction to Databases",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Barney" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "MWF", instructor: "Kirkham" },
    { sectionNum: 3, roomNum: "STC 347", enrolled: 30, days: "TTh", instructor: "Barney" }
  ],
  changeEnrollment(sectionNum, add = true) {
    const section = this.sections.find(sec => sec.sectionNum == sectionNum);
    if (section) {
      add ? section.enrolled++ : section.enrolled--;
    }
  }
};

export default byuiCourse;
