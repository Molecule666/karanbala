import React from "react";
import { useMutation, useQuery } from "react-query";
import { DefaultService } from "../../services";

const useUpdateFieldOfStudy = () => {
    return useMutation((request: any) => {
        return DefaultService.fieldOfStudyControllerUpdate(request.id, { title: request.title });
    });
};

export default useUpdateFieldOfStudy;
