// import via index.ts
import {say} from '@darn/somelib'


// explicit import from module
import {say as say2} from '@darn/somelib/lib/say'

say('hello')
say2('goodbye')

