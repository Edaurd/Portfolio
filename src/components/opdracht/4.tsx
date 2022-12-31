import React from "react";
import "./OpdrachtenStyles.css";

interface Student {
  name: string;
  age: number;
  year: number;
}

const Filtering = () => {
  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState("name");
  const studenten: Student[] = [
    {
      name: "Jacob",
      age: 21,
      year: 2,
    },
    {
      name: "Jan",
      age: 20,
      year: 1,
    },
    {
      name: "Joris",
      age: 22,
      year: 3,
    },
    {
      name: "Joris",
      age: 22,
      year: 3,
    },
    {
      name: "Korneel",
      age: 23,
      year: 4,
    },
    {
      name: "Eduard",
      age: 22,
      year: 2,
    },
    {
      name: "Mathias",
      age: 22,
      year: 3,
    },
    {
      name: "Muhammad",
      age: 20,
      year: 1,
    },
    {
      name: "Perneel",
      age: 22,
      year: 3,
    },
    {
      name: "Piet",
      age: 21,
      year: 2,
    },
  ];

  studenten.sort((a, b) => {
    if (sort === "name") {
      return a.name.localeCompare(b.name);
    } else if (sort === "age") {
      return a.age - b.age;
    } else if (sort === "year") {
      return a.year - b.year;
    }
    return 0;
  });

  const filterStudents = (student: Student) => {
    return (
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.age.toString().includes(search) ||
      student.year.toString().includes(search)
    );
  };

  return (
    <>
      <label>Search: </label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(event) => setSearch(event.target.value)}
      />
      <table>
        <thead>
          <th
            colSpan={2}
            style={{ fontWeight: sort == "name" ? "bold" : "normal" }}
            onClick={() => {
              setSort("name");
            }}
          >
            Name
          </th>
          <th
            style={{ fontWeight: sort == "age" ? "bold" : "normal" }}
            onClick={() => {
              setSort("age");
            }}
          >
            Age
          </th>
          <th
            style={{ fontWeight: sort == "year" ? "bold" : "normal" }}
            onClick={() => {
              setSort("year");
            }}
          >
            Year
          </th>
        </thead>
        <tbody>
          {studenten.filter(filterStudents).map((student) => (
            <tr>
              <td colSpan={2}>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Vier = () => {
  return (
    <div className="studenten">
      <Filtering />
    </div>
  );
};

export default Vier;
