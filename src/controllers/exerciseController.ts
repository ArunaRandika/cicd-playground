import { Request, Response } from 'express';
import exercises from '../data/exercises';

const normalize = (value: string) => value.trim().toLowerCase();

export const getAll = (req: Request, res: Response) => {
    const bodyPart = typeof req.query.bodyPart === 'string' ? normalize(req.query.bodyPart) : '';

    if (!bodyPart) {
        res.json(exercises);
        return;
    }

    const filteredExercises = exercises.filter((exercise) => normalize(exercise.bodyPart) === bodyPart);
    res.json(filteredExercises);
};

export const getById = (req: Request, res: Response) => {
    const rawId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const id = Number.parseInt(rawId, 10);

    if (Number.isNaN(id)) {
        res.status(400).json({ message: 'Exercise id must be a number' });
        return;
    }

    const exercise = exercises.find((item) => item.id === id);

    if (!exercise) {
        res.status(404).json({ message: 'Exercise not found' });
        return;
    }

    res.json(exercise);
};

export const search = (req: Request, res: Response) => {
    const query = typeof req.query.q === 'string' ? normalize(req.query.q) : '';

    if (!query) {
        res.status(400).json({ message: 'Search query parameter q is required' });
        return;
    }

    const results = exercises.filter((exercise) => {
        return [exercise.name, exercise.bodyPart, exercise.category, exercise.instructions]
            .some((value) => normalize(value).includes(query));
    });

    res.json(results);
};
