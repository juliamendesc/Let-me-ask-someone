import { ReactNode } from 'react';
import userImg from '../assets/images/user.svg';
import cs from 'classnames';
import '../styles/questions.scss';

type QuestionProps = {
    content: string,
    author: {
        name: string,
        avatar: string | undefined
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHighlighted?:boolean;
}

export function Question({
    content, 
    author, 
    isAnswered = false, 
    isHighlighted = false, 
    children
}: QuestionProps) {
    return (
        <div 
        className={cs(
            'question',
            { answered: isAnswered },
            { highlighted: isHighlighted && !isAnswered },
            )}
        >
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    {author.avatar ? (
                    <img src={author.avatar} alt={author.name} />
                    ) : (
                    <img src={userImg} alt={author.name} />
                    )}
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </div>
    )
}