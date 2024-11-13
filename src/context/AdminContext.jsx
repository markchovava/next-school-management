"use client"
import { ClassroomInit, ClassroomInitialState, ClassroomReducer } from "@/reducers/ClassroomReducer";
import { EventInit, EventInitialState, EventReducer } from "@/reducers/EventReducer";
import { FormGradeInit, FormGradeInitialState, FormGradeReducer } from "@/reducers/FormGradeReducer";
import { PaymentInit, PaymentInitialState, PaymentReducer } from "@/reducers/PaymentReducer";
import { RoleInit, RoleInitialState, RoleReducer } from "@/reducers/RoleReducer";
import { SubjectInit, SubjectInitialState, SubjectReducer } from "@/reducers/SubjectReducer";
import { TimetableInit, TimetableInitialState, TimetableReducer } from "@/reducers/TimetableReducer";
import { createContext, useContext, useReducer } from "react";



export const AdminContext = createContext();


export default function AdminContextProvider({ children }) {
    const [timetableState, timetableDispatch] = useReducer(TimetableReducer, TimetableInitialState, TimetableInit);
    const [roleState, roleDispatch] = useReducer(RoleReducer, RoleInitialState, RoleInit);
    const [subjectState, subjectDispatch] = useReducer(SubjectReducer, SubjectInitialState, SubjectInit);
    const [formGradeState, formGradeDispatch] = useReducer(FormGradeReducer, FormGradeInitialState, FormGradeInit);
    const [classroomState, classroomDispatch] = useReducer(ClassroomReducer, ClassroomInitialState, ClassroomInit);
    const [eventState, eventDispatch] = useReducer(EventReducer, EventInitialState, EventInit);
    const [paymentState, paymentDispatch] = useReducer(PaymentReducer, PaymentInitialState, PaymentInit);

    return (
        <AdminContext.Provider value={{ 
            timetableState, timetableDispatch, 
            roleState, roleDispatch,
            subjectState, subjectDispatch,
            formGradeState, formGradeDispatch,
            classroomState, classroomDispatch,
            eventState, eventDispatch,
            paymentState, paymentDispatch,
        }}>
            {children}
        </AdminContext.Provider>
      )
}

export const AdminContextState = () => {
    return useContext(AdminContext)
}
 
