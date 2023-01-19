import {render, screen} from '@testing-library/react';
import Logo from '../common/Logo';


describe("Logo component", ()=>{

    let paragraph;
    let span;
    beforeEach(()=>{
        render(<Logo/>);
        paragraph = screen.getByText(/kruger/i);
        span = screen.getByText(/flix/i);
    });

    test("logo component parragraph must be in the document", ()=>{                
        expect(paragraph).toBeInTheDocument;
    });

    test("logo component span must be in the document", ()=>{                
        expect(span).toBeInTheDocument;
    });

});