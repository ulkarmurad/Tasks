import { useEffect, useState } from "react";
import { z } from "zod";
import "./form.css";

function fillForm() {
  return {
    username: "",
    password: "",
    password_confirm: "",
    email: "",
    date: "",
  };
}

export default function Form() {
  const [form, setForm] = useState(fillForm());
  const [errors, setErrors] = useState(fillForm());

  const handleChange = (event) => {
    let obj = {
      [event.target.name]: event.target.value,
    };
    let form_copy = { ...form };
    let payload = { ...form_copy, ...obj };
    setForm(payload);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if password and password confirmation match
    if (form.password !== form.password_confirm) {
      setErrors({ password_confirm: "Passwords do not match" });
      return;
    }

    // Convert the date string to a Date object
    const dateObject = new Date(form.date);

    const userSchema = z.object({
      username: z.string().min(5).max(20),
      password: z.string().min(5).max(20),
      email: z.string().email(),
      date: z.date(),
    });

    // Validate the form with the converted date
    let results = userSchema.safeParse({ ...form, date: dateObject });
    let copy = {};

    if (results.error) {
      results.error.issues.forEach((el) => {
        copy = { ...copy, [el.path[0]]: el.message };
      });
    }

    console.log(copy);
    setErrors(copy);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Signup Form</legend>
          <label htmlFor="username">Username</label>
          <input
            value={form.username}
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="username"
          />
          <p className="error">{errors.username}</p>

          <label htmlFor="email">Email</label>
          <input
            value={form.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="email"
          />
          <p className="error">{errors.email}</p>

          <label htmlFor="password">Password</label>
          <input
            value={form.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
          />
          <p className="error">{errors.password}</p>

          <label htmlFor="password_confirm">Password Confirm</label>
          <input
            value={form.password_confirm}
            onChange={handleChange}
            name="password_confirm"
            type="password"
            placeholder="password_confirm"
          />
          <p className="error">{errors.password_confirm}</p>

          <label htmlFor="date">Birthdate</label>
          <input
            value={form.date}
            onChange={handleChange}
            name="date"
            type="date"
            placeholder="birthdate"
          />
          <p className="error">{errors.date}</p>

          <button type="submit">Signup</button>
        </fieldset>
      </form>
    </div>
  );
}
