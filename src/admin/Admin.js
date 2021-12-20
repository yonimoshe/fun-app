import React from 'react';
import { useForm } from "react-hook-form";
import './Admin.css';

function Admin(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Image</label>
        <input {...register("Image_url", { required: true })} placeholder="Image_url" />
        <label>question</label>
        <input {...register("question", { required: true })} placeholder="question" />
        <label>correct answer</label>
        <input {...register("correct_answer", { required: true })} placeholder="correct_answer" />
        <label>incorrect answer 1</label>
        <input {...register("incorrect_answer_1", { required: true })} placeholder="incorrect_answer_1" />
        <label>incorrect answer 2</label>
        <input {...register("incorrect_answer_1", { required: true })} placeholder="incorrect_answer_2" />
        <label>incorrect answer 3</label>
        <input {...register("incorrect_answer_3", { required: true })} placeholder="incorrect_answer_3" />
        <input type="submit" />
      </form>
    );
}

export default Admin;