<template>
    <nav>
        <v-toolbar>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Liste</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="grey">
                <span>Se déconnecter</span>
                <v-icon class="ml-2">mdi-arrow-right-thick</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" color="deep-purple">
            <v-list>
                <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                >
                    <v-list-item-icon>
                        <v-icon class="white--text">
                            {{ item.icon }}
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            {{ item.title }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on }">
                    <v-btn color="red lighten-2 mt-3 ml-3" dark v-on="on">
                        Ajouter un élément
                    </v-btn>
                </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Ajouter un élément
        </v-card-title>

        <v-card-text>
           <v-form class="px-3" ref="form">
               <v-text-field label="titre" v-model="titre" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
               <v-textarea label="information" v-model="info" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
            <v-row justify="center">
                <v-date-picker label="date" v-model="picker" :rules="inputRules" class="mt-5"></v-date-picker>
            </v-row>
               <v-btn class="success mt-5" small @click="submit">Ajouter l'élément</v-btn>
           </v-form>
        </v-card-text>

      </v-card>
    </v-dialog>
        
    </nav>
</template>

<script>
import db from '@/fb'

export default {
    data(){
        return {
            titre:'',
            info:'',
            picker: new Date().toISOString().substr(0, 10), 
            inputRules :[
                v => v.length >= 3 || 'La taille minimum est de 3 caractères'
            ]
        }
    },
    methods:{
        submit() {
            if(this.$refs.form.validate()){
                const project = {
                    titre: this.titre,
                    info: this.info,
                    person: 'Nedlight',
                    status:'Ongoing',
                }

                db.collection('projects').add(project).then(() => {
                    console.log('Added to db')
                })
            }
        }
    }
}

</script>