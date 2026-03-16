export interface Exercise {
    id: number;
    name: string;
    bodyPart: string;
    category: string;
    instructions: string;
}

const exercises: Exercise[] = [
    {
        id: 1,
        name: 'Push-Up',
        bodyPart: 'chest',
        category: 'strength',
        instructions: 'Start in a high plank, lower your chest toward the floor, and press back up while keeping your core tight.',
    },
    {
        id: 2,
        name: 'Squat',
        bodyPart: 'legs',
        category: 'strength',
        instructions: 'Stand with feet shoulder-width apart, push your hips back, lower until thighs are parallel, then stand tall.',
    },
    {
        id: 3,
        name: 'Plank',
        bodyPart: 'core',
        category: 'stability',
        instructions: 'Hold a forearm plank with a straight line from shoulders to heels and brace your abs the entire time.',
    },
    {
        id: 4,
        name: 'Burpee',
        bodyPart: 'full body',
        category: 'cardio',
        instructions: 'Drop into a squat, kick your feet back, perform a push-up, jump your feet forward, and explode upward.',
    },
    {
        id: 5,
        name: 'Lunges',
        bodyPart: 'legs',
        category: 'strength',
        instructions: 'Step forward, lower both knees to about 90 degrees, then drive through the front heel to return.',
    },
    {
        id: 6,
        name: 'Mountain Climbers',
        bodyPart: 'core',
        category: 'cardio',
        instructions: 'From a plank, alternate driving each knee toward your chest at a steady and controlled pace.',
    },
    {
        id: 7,
        name: 'Glute Bridge',
        bodyPart: 'glutes',
        category: 'strength',
        instructions: 'Lie on your back with knees bent, press through your heels, and lift your hips until your body forms a straight line.',
    },
    {
        id: 8,
        name: 'Bicep Curl',
        bodyPart: 'arms',
        category: 'strength',
        instructions: 'Keep your elbows close to your body and curl the weight toward your shoulders without swinging.',
    },
    {
        id: 9,
        name: 'Tricep Dip',
        bodyPart: 'arms',
        category: 'strength',
        instructions: 'Lower your body by bending your elbows beside a bench or chair, then press back to the starting position.',
    },
    {
        id: 10,
        name: 'Superman',
        bodyPart: 'back',
        category: 'mobility',
        instructions: 'Lie face down, lift your arms and legs off the floor, pause briefly, and lower with control.',
    },
    {
        id: 11,
        name: 'Jumping Jacks',
        bodyPart: 'full body',
        category: 'cardio',
        instructions: 'Jump your feet apart while raising your arms overhead, then return to the starting position rhythmically.',
    },
    {
        id: 12,
        name: 'Shoulder Press',
        bodyPart: 'shoulders',
        category: 'strength',
        instructions: 'Press the weights overhead until your arms are extended, then lower slowly to shoulder height.',
    },
];

export default exercises;

