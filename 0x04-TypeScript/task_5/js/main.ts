interface MajorCredits {
    credits: number;
    brand: "major";
}

interface MinorCredits {
    credits: number;
    brand: "minor";
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1.credits + subject2.credits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;
}

const subject1: MajorCredits = {
    credits: 10,
    brand: "major"
}

const subject2: MajorCredits = {
    credits: 20,
    brand: "major"
}

console.log(sumMajorCredits(subject1, subject2));

const subject3: MinorCredits = {
    credits: 10,
    brand: "minor"
}

const subject4: MinorCredits = {
    credits: 30,
    brand: "minor"
}

console.log(sumMinorCredits(subject3, subject4));