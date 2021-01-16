import React from 'react';
import { BookCard, BookCardBox, BookCards, General } from './TrainerBookElements';

function TrainerBook(
    {
        trial,
        price
    }
) {
    return (
        <General>
            <BookCards>
                <BookCardBox>
                    <BookCard>
                        <div class="left"><span>Trial Lesson</span></div>
                        <div class="right"><span>{"USD "+trial}</span></div>
                    </BookCard>
                </BookCardBox>
                <BookCardBox>
                    <BookCard>
                        <div class="left"><span>Lessons</span></div>
                        <div class="right"><span>{"USD "+price}</span></div>
                    </BookCard>
                </BookCardBox>
            </BookCards>

        </General>
    )
}

export default TrainerBook