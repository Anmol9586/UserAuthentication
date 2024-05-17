import { FormHelperText, Stack, StackProps, Typography } from "@mui/material";
import React from "react";
export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  children,
  ...props
}) => {
  return (
    <Stack spacing={1} flex={1} {...props}>
      <Typography
      variant="subtitle2"
        color={"text.primary"}
        sx={{ textTransform: "capitalize" }}
      >
        {label}
      </Typography>
      {children}

      {Boolean(error) && (
        <FormHelperText sx={{ color: "error.main" }}>{error}</FormHelperText>
      )}
    </Stack>
  );
};

interface FormFieldProps extends StackProps {
  error?: any;
  label?: string;
}