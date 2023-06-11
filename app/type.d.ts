import { ST } from "next/dist/shared/lib/utils"

type User ={
    id: String
    name: String
    email: String
    role:role

}
type Application ={
    candidateImage: string,
    name: string,
    studentId: string,
    email: string,
    guardianName: string,
    guardianNID: string,
    mobileNumber: string,
    created_at: string,
}
enum role {
    ADMIN="ADMIN",
    STUDENT="STUDENT"
}