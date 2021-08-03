import './Title.css';

export function Title({ text = "No page title defined!" }) {
    return (
        <div className="Title">
            {text}
        </div>
    );
}
