import { StyledContainer } from "./Container.styles";
import { ContainerProps } from "./Container.types";

export function Container({children}: ContainerProps): JSX.Element{
    return(
        <StyledContainer>
           {children}
        </StyledContainer>
    )
};