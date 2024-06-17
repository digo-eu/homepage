import React from "react";

export const MenuIcon = ({
    height = "24px",
    width = "24px",
    color,
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => (
    <svg className={className} width={width} height={height} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
)

export const HomeIcon = ({
    height = "24px",
    width = "24px",
    color,
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => (
<svg className={className} width={width} height={height} fill={color} viewBox="0 0 32 32">

<path d="M29.832,12.222c-0.192,0.289-0.51,0.445-0.833,0.445c-0.19,0-0.383-0.055-0.554-0.168L16,4.202 L3.555,12.499c-0.462,0.305-1.081,0.182-1.387-0.277c-0.307-0.46-0.183-1.08,0.277-1.387l13-8.667c0.336-0.225,0.773-0.225,1.109,0 l13,8.667C30.015,11.142,30.139,11.762,29.832,12.222z M4,13v6v5v4c0,1.1,0.9,2,2,2h7v-9c0-0.55,0.45-1,1-1h4c0.55,0,1,0.45,1,1v9h7 c1.1,0,2-0.9,2-2v-4v-5v-6L16,5L4,13z"
    id="Home"/>
</svg>
)

export const GitHubIcon = ({
    height = "24px",
    width = "24px",
    color,
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => (
    <svg className={className} width={width} height={height} viewBox="0 0 20 20">
        <title>GitHub</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill={color} fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill={color}>
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                    id="GitHub">
                    </path>
                </g>
            </g>
        </g>
    </svg>
);

export const GeoServerIcon = ({
    height = "24px",
    width = "24px",
    color,
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => (
<svg className={className} width={width} height={height} fill={color} viewBox="0 0 64 64">
<g>
	<path d="M62.364,0.773c-0.694-0.509-1.526-0.772-2.366-0.772c-0.403,0-0.809,0.061-1.202,0.185l-9.276,2.93 c0.102,0.175,0.183,0.386,0.234,0.649c0.286,1.477-0.732,2.198-1.188,3.606c0.456,1.195,0.159,2.094,0.785,3.078 c0.584,0.893,1.581,0.5,1.995,1.545c0.637,1.586-0.393,3.215-1.592,4.108c-0.388,0.284-0.748,0.38-1.108,0.38 c-0.641,0-1.279-0.301-2.07-0.38c-2.212-0.213-3.385-0.97-5.555-1.546c-2.187-0.563-3.505-1.598-5.509-1.598 c-0.268,0-0.547,0.019-0.843,0.059c-1.607,0.233-3.03-0.151-3.975,1.539c-0.901,1.635-0.949,3.558,0,5.152 c0.817,1.345,1.889,1.174,3.179,1.532c0.56,0.154,1.05,0.206,1.517,0.206c0.947,0,1.794-0.213,2.901-0.213 c0.113,0,0.229,0.002,0.347,0.007c0.22,0.009,0.43,0.013,0.634,0.013c0.752,0,1.409-0.048,2.053-0.048 c0.907,0,1.787,0.095,2.869,0.55c1.321,0.55,1.836,1.601,3.178,2.061c0.495,0.169,0.945,0.233,1.372,0.233 c1.383,0,2.528-0.682,4.194-0.756c1.013-0.036,1.851-0.505,2.675-0.504c0.428,0,0.852,0.126,1.294,0.504 c1.146,1.004,0.541,2.926,1.581,4.114c0.881,1.024,1.613,1.312,2.78,1.546c0.528,0.101,1.002,0.196,1.451,0.196 c0.442,0,0.86-0.095,1.281-0.367V4C64,2.726,63.393,1.527,62.364,0.773z"/>
	<path d="M46.773,14.112c0.515,0.052,0.955,0.162,1.309,0.252c0.166,0.042,0.384,0.097,0.505,0.113 c0.448-0.344,0.963-0.978,0.948-1.507c-0.477-0.184-1.27-0.527-1.872-1.448c-0.596-0.938-0.7-1.829-0.776-2.479 c-0.044-0.372-0.078-0.666-0.189-0.959c-0.163-0.426-0.175-0.896-0.034-1.329c0.223-0.688,0.527-1.231,0.772-1.667 c0.29-0.516,0.367-0.684,0.368-0.826c-0.127-0.028-0.285-0.059-0.415-0.082c-0.218-0.041-0.472-0.094-0.736-0.159L43,5.174v7.9 c0.274,0.094,0.548,0.188,0.794,0.275C44.813,13.714,45.619,14.001,46.773,14.112z"/>
	<path d="M0,11v6.054c0.659,0.069,1.257,0.104,1.86,0.104c0.646,0,1.271-0.035,2.062-0.078l0.807-0.044 c0.425-0.023,0.847-0.168,1.335-0.335c0.661-0.228,1.412-0.484,2.314-0.484c0.725,0,1.437,0.173,2.098,0.504 c1.245,0.607,1.876,1.559,2.383,2.322c0.274,0.413,0.511,0.77,0.811,1.021c0.709,0.595,1.312,0.808,2.148,1.102 c0.826,0.292,1.763,0.622,2.845,1.348c0.894,0.601,1.636,1.149,2.338,1.737V0.475L2.617,7.247C1.045,7.826,0,9.324,0,11z"/>
	<path d="M39.271,23.254c-0.229,0-0.467-0.004-0.716-0.015c-0.09-0.003-0.179-0.005-0.265-0.005 c-0.462,0-0.888,0.049-1.339,0.1c-0.488,0.056-0.993,0.113-1.562,0.113c-0.7,0-1.371-0.091-2.052-0.279 c-0.225-0.062-0.464-0.107-0.717-0.154c-1.016-0.191-2.55-0.479-3.646-2.281c-1.29-2.169-1.303-4.838-0.027-7.151 c1.267-2.267,3.243-2.387,4.551-2.466c0.312-0.019,0.605-0.037,0.898-0.079c0.375-0.052,0.75-0.077,1.114-0.077 c1.619,0,2.844,0.492,4.026,0.968c0.482,0.193,0.958,0.37,1.462,0.53V5.784L24.265,0.205C23.854,0.068,23.428,0,23,0v26.147 c0.383,0.402,0.779,0.836,1.213,1.329c0.519,0.591,0.866,1.182,1.146,1.657c0.334,0.567,0.521,0.873,0.81,1.06 c0.04,0.025,0.059,0.031,0.078,0.032c0.153,0,0.454-0.089,0.745-0.176c0.528-0.157,1.188-0.354,1.961-0.354 c0.571,0,1.128,0.109,1.669,0.33l0.347,0.143c1.569,0.643,3.521,1.443,4.364,4.208c0.527,1.7,0.525,3.133-0.001,4.777 c-0.387,1.233-1.182,1.86-1.657,2.234c-0.111,0.089-0.265,0.209-0.295,0.249l-0.017,0.052c-0.024,0.084,0.025,0.346,0.07,0.576 c0.123,0.635,0.309,1.595-0.14,2.712c-0.764,1.856-2.263,2.798-4.456,2.798c-0.229,0-0.461-0.009-0.689-0.023 c-1.413-0.083-2.312-0.787-2.968-1.302c-0.241-0.189-0.47-0.368-0.71-0.51c-0.576-0.34-1.048-0.718-1.47-1.091v13.345l17.796,5.62 c0.067,0.021,0.137,0.03,0.204,0.048V23.214c-0.183,0.004-0.362,0.007-0.552,0.014C40.075,23.24,39.688,23.254,39.271,23.254z"/>
	<path d="M20.09,43.093c-0.058-0.004-0.114-0.009-0.17-0.012c-0.002,0.063-0.004,0.127-0.006,0.181 c-0.022,0.691-0.055,1.735-0.769,2.666c-0.82,1.09-1.949,1.666-3.265,1.666c-0.718,0-1.395-0.167-1.991-0.314l-0.363-0.088 c-1.226-0.279-1.983-1.005-2.537-1.534c-0.263-0.252-0.512-0.49-0.659-0.526c-0.365-0.088-0.682-0.164-0.861-0.164 c-0.043,0-0.122,0-0.3,0.072c-0.45,0.184-0.708,0.805-1.19,2.18c-0.151,0.434-0.31,0.884-0.489,1.333 c-0.162,0.41-0.198,0.939-0.235,1.5c-0.075,1.11-0.177,2.632-1.433,3.827C4.926,54.734,3.91,55.15,2.719,55.15 c-0.613,0-1.186-0.109-1.739-0.215l-0.104-0.021C0.57,54.854,0.281,54.782,0,54.7V60c0,1.274,0.607,2.473,1.636,3.227 C2.33,63.735,3.16,64,4,64c0.404,0,0.811-0.062,1.204-0.186L21,58.826V43.193c-0.111-0.041-0.222-0.063-0.34-0.068 C20.462,43.119,20.272,43.106,20.09,43.093z"/>
	<path d="M54.77,41.25c-0.93-0.286-1.528-0.468-2.054-0.19c0.165,0.238,0.497,0.591,0.735,0.843 c0.9,0.954,2.132,2.26,1.539,3.812c-0.413,1.104-1.393,1.496-2.107,1.782c-0.679,0.271-0.833,0.373-0.87,0.572 c-0.038,0.209,0.021,0.279,0.055,0.32c0.193,0.231,0.798,0.464,1.717,0.464c1.042,0,2.11-0.295,2.721-0.751 c1.052-0.807,1.4-1.912,1.118-3.578C57.345,42.836,56.411,41.767,54.77,41.25z"/>
	<path d="M60.979,30.936l-0.104-0.021c-1.498-0.3-2.675-0.772-3.893-2.189c-0.879-1.005-1.068-2.183-1.207-3.042 c-0.048-0.301-0.12-0.751-0.198-0.893c-0.146,0.012-0.427,0.09-0.676,0.158c-0.509,0.141-1.142,0.316-1.875,0.343 c-0.615,0.027-1.179,0.179-1.775,0.34c-0.728,0.196-1.553,0.418-2.508,0.418c-0.685,0-1.344-0.111-2.021-0.342 c-1.055-0.361-1.744-0.943-2.298-1.41c-0.379-0.32-0.653-0.551-1.007-0.698c-0.146-0.062-0.282-0.106-0.418-0.15V63.86 c0.088-0.023,0.178-0.036,0.265-0.065l18-6C62.898,57.25,64,55.722,64,54V30.948c-0.406,0.122-0.827,0.202-1.281,0.202 C62.105,31.15,61.533,31.041,60.979,30.936z M57.712,49.697c-0.973,0.727-2.438,1.156-3.928,1.156c-1.462,0-2.616-0.42-3.253-1.183 c-0.453-0.544-0.621-1.222-0.485-1.96c0.241-1.33,1.356-1.775,2.094-2.071c0.594-0.237,0.884-0.377,0.979-0.633 c0.147-0.386-0.616-1.195-1.122-1.731c-0.758-0.803-1.473-1.561-1.361-2.525c0.042-0.357,0.225-0.872,0.856-1.289 c0.562-0.366,1.151-0.543,1.804-0.543c0.691,0,1.332,0.196,2.01,0.404c2.427,0.763,3.889,2.44,4.29,4.872 C59.999,46.577,59.365,48.43,57.712,49.697z"/>
	<path d="M12.384,21.596c-1.199-1.004-1.448-2.425-2.785-3.077c-0.437-0.219-0.837-0.302-1.221-0.302 c-1.145,0-2.145,0.739-3.539,0.816c-1.177,0.06-2.053,0.125-2.979,0.125c-0.572,0-1.169-0.027-1.86-0.094v33.519 c0.376,0.165,0.783,0.274,1.268,0.371c0.528,0.101,1.002,0.196,1.451,0.196c0.596,0,1.146-0.169,1.722-0.718 c1.184-1.127,0.521-2.926,1.188-4.616c0.817-2.041,1.099-3.943,2.786-4.63c0.393-0.158,0.725-0.22,1.054-0.22 c0.413,0,0.82,0.098,1.329,0.22c1.357,0.33,1.809,1.744,3.173,2.055c0.679,0.159,1.318,0.353,1.91,0.353 c0.609,0,1.168-0.206,1.666-0.868c0.685-0.893,0.037-2.268,0.79-3.078c0.437-0.475,0.872-0.576,1.357-0.576 c0.315,0,0.653,0.044,1.025,0.055c0.101,0.004,0.186,0.03,0.28,0.043v-14.21c-1.035-1.028-2.025-1.827-3.453-2.786 C15.631,22.888,14.193,23.113,12.384,21.596z"/>
	<path d="M28.265,45.756c0.193,0.012,0.385,0.02,0.572,0.02c1.098,0,2.076-0.269,2.606-1.559 c0.43-1.072-0.335-1.951,0-3.091c0.376-1.333,1.57-1.265,1.979-2.569c0.414-1.291,0.403-2.287,0-3.587 c-0.615-2.02-1.974-2.432-3.57-3.098c-0.312-0.127-0.61-0.176-0.899-0.176c-0.952,0-1.805,0.529-2.706,0.529 c-0.376,0-0.761-0.092-1.165-0.354C24.04,31.198,23.747,30.17,23,29.161v12.98c0.759,0.649,1.463,1.474,2.484,2.075 C26.557,44.849,27.087,45.687,28.265,45.756z"/>
</g>
</svg>
)

export const HtmxIcon = ({
    height = "24px",
    width = "24px",
    color,
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => (
<svg className={className} width={width} height={height} fill={color} viewBox="5 5 15 15">
<path d="M14.2354 7.14709C14.3167 6.74092 14.0533 6.3458 13.6471 6.26456C13.2409 6.18333 12.8458 6.44674 12.7646 6.85291L14.2354 7.14709ZM10.7646 16.8529C10.6833 17.2591 10.9467 17.6542 11.3529 17.7354C11.7591 17.8167 12.1542 17.5533 12.2354 17.1471L10.7646 16.8529ZM7.97342 15.4921C8.26837 15.7829 8.74323 15.7795 9.03406 15.4846C9.32488 15.1896 9.32153 14.7148 9.02658 14.4239L7.97342 15.4921ZM5.5 12L4.97342 11.4659C4.83048 11.6069 4.75 11.7993 4.75 12C4.75 12.2007 4.83048 12.3931 4.97342 12.5341L5.5 12ZM9.02658 9.57606C9.32153 9.28523 9.32488 8.81037 9.03406 8.51542C8.74323 8.22047 8.26837 8.21712 7.97342 8.50794L9.02658 9.57606ZM15.9773 14.3782C15.6802 14.6669 15.6735 15.1417 15.9622 15.4387C16.2509 15.7358 16.7257 15.7425 17.0227 15.4538L15.9773 14.3782ZM19.5 12L20.0227 12.5378C20.1667 12.3979 20.2486 12.2061 20.25 12.0053C20.2514 11.8046 20.1723 11.6116 20.0303 11.4697L19.5 12ZM17.0303 8.46967C16.7374 8.17678 16.2626 8.17678 15.9697 8.46967C15.6768 8.76256 15.6768 9.23744 15.9697 9.53033L17.0303 8.46967ZM12.7646 6.85291L10.7646 16.8529L12.2354 17.1471L14.2354 7.14709L12.7646 6.85291ZM9.02658 14.4239L6.02658 11.4659L4.97342 12.5341L7.97342 15.4921L9.02658 14.4239ZM6.02658 12.5341L9.02658 9.57606L7.97342 8.50794L4.97342 11.4659L6.02658 12.5341ZM17.0227 15.4538L20.0227 12.5378L18.9773 11.4622L15.9773 14.3782L17.0227 15.4538ZM20.0303 11.4697L17.0303 8.46967L15.9697 9.53033L18.9697 12.5303L20.0303 11.4697Z"
fill={color}/>
</svg>
)

export const WeddingIcon = ({
    height = "24px",
    width = "24px",
    color,
    className,
    ...props
}: React.SVGProps<SVGSVGElement>) => (
<svg className={className} fill={color} height={height} width={width} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512.001 512.001" xmlSpace="preserve">
<g>
	<g>
		<circle cx="149.334" cy="234.667" r="35.556"/>
	</g>
</g>
<g>
	<g>
		<polygon points="92.445,298.667 92.445,398.223 120.889,512.001 177.778,512.001 206.223,398.223 206.223,298.667 		"/>
	</g>
</g>
<g>
	<g>
		<circle cx="348.445" cy="234.667" r="35.556"/>
	</g>
</g>
<g>
	<g>
		<polygon points="391.112,398.223 391.112,298.667 305.778,298.667 305.778,398.223 277.334,512.001 419.556,512.001 		"/>
	</g>
</g>
<g>
	<g>
		<path d="M331.688,12.636c-16.848-16.848-44.163-16.848-61.01,0l-21.788,21.79l-21.79-21.79c-16.848-16.848-44.163-16.848-61.01,0 c-16.848,16.848-16.848,44.163,0,61.009l82.8,82.8l82.799-82.799C348.536,56.799,348.536,29.483,331.688,12.636z"/>
	</g>
</g>
</svg>
)