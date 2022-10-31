module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'plugin:react/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        indent: 'off',
        camelcase: 'off',
        'no-plusplus': 'off',
        'linebreak-style': 0,
        'max-len': ['error', { code: 120, tabWidth: 4 }],
        'no-alert': 'off',
        'object-curly-newline': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'prettier/prettier': 0,
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off', // props로 받은 것 바로 props로 넘기기 허용
        'react/jsx-one-expression-per-line': 'off', // 한 라인에 여러개의 jsx를 사용할 수 있음
        'implicit-arrow-linebreak': 0, // 화살표 함수 뒤 줄바꿈 & 줄바꿈 금지 허용
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // 확장자 설정
        'operator-linebreak': [
            1,
            'after',
            {
                overrides: {
                    '?': 'ignore',
                    ':': 'ignore',
                },
            },
        ],
        'no-unused-vars': 'warn', // 정의 후 사용하지 않은 변수는 경고만 하기
        'no-use-before-define': 0, // 정의 전에 사용 금지
        'no-console': 0, // console 사용하기
        'import/prefer-default-export': ['off'], // export const 문을 쓸때 에러를 내는 rule 해제
        'import/extensions': 0, // ts 파일을 불러오기 위해
        'react/self-closing-comp': 'warn', // 셀프 클로징 태그 가능하면 적용
        'arrow-body-style': 'off',
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
