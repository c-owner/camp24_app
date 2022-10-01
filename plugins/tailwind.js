import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import {
    TInput,
    TTextarea,
    TSelect,
    TRadio,
    TCheckbox,
    TButton,
    TInputGroup,
    TCard,
    TAlert,
    TModal,
    TDropdown,
    TRichSelect,
    TPagination,
    TTag,
    TRadioGroup,
    TCheckboxGroup,
    TTable,
    TDatepicker,
    TToggle,
    TDialog,
} from 'vue-tailwind/dist/components';
const settings = {
    // Use the following syntax
    // {component-name}: {
    //   component: {importedComponentObject},
    //   props: {
    //     {propToOverride}: {newDefaultValue}
    //     {propToOverride2}: {newDefaultValue2}
    //   }
    // }
    't-input': {
        component: TInput,
        props: {
            classes: 'border-2 block w-full rounded text-gray-800'
            // ...More settings
        }
    },
    't-textarea': {
        component: TTextarea,
        props: {
            classes: 'border-2 block w-full rounded text-gray-800'
            // ...More settings
        }
    },
    't-button': {
        component: TButton,
        props: {
            classes: 'hover:bg-gray-700 text-black font-bold py-2 px-2 rounded shadow hover:shadow-lg'
        }
    },
    't-alert': {
        component: TAlert,
        props: {
            // The fixed classes will never change and will be merged with the `classes` value or the active variant
            fixedClasses: {
                wrapper: 'rounded p-4 flex text-sm border-l-4',
                body: 'flex-grow',
                close: 'ml-4 rounded',
                closeIcon: 'h-5 w-5 fill-current'
            },
            classes: {
                wrapper: 'bg-blue-100 border-blue-500',
                body: 'text-blue-700',
                close: 'text-blue-700 hover:text-blue-500 hover:bg-blue-200',
                closeIcon: 'h-5 w-5 fill-current'
            },
            variants: {
                danger: {
                    wrapper: 'bg-red-100 border-red-500',
                    body: 'text-red-700',
                    close: 'text-red-700 hover:text-red-500 hover:bg-red-200'
                    // Notice that I am not defining the `closeIcon` class since we only
                    // need to write the classes we want to override
                },
            }
        }
    },
    // ...Rest of the components
}

Vue.use(VueTailwind, settings);
