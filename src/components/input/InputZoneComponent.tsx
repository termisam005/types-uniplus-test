import ImgComponent from '../common/ImgComponent';

interface Props {
	id?: string;
	zoneClass: string;
	type: string;
	name?: string;
	inputClass: string;
	placeholder: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	deleteClass?: string;
	onDelete?: () => void;
	messClass: string;
	message?: string;
	readOnly?: boolean;
}


const InputZoneComponent = ({ zoneClass, type, inputClass, placeholder, value, onChange, deleteClass, onDelete, messClass, message, readOnly }:Props) => {

    return (
        <div className={zoneClass}>
            <input type={type} className={inputClass} placeholder={placeholder} defaultValue={value} onChange={onChange} readOnly={readOnly} />
            <span className={deleteClass} onClick={onDelete}>
                <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
            </span>
            <span className={messClass}>{message}</span>
        </div>
    );
};

export default InputZoneComponent;
